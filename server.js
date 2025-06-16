const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3000;

const mongoURI = 'mongodb+srv://icarofne:segredo123@cluster0.bewozf3.mongodb.net/site_dedalus?retryWrites=true&w=majority&appName=Cluster0';

app.use(cors());
app.use(express.json());


mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

app.get('/', (req, res) => {
    res.send('Hello from Node.js, Express and MongoDB!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


app.post('/api/vote', async (req, res) => {
    try {
        const db = mongoose.connection.db;     
        const votesCollection = db.collection('enquete_votes');
        const vote = req.body.vote;
        const validVotes = ['falta_de_dados', 'dificuldade_prever', 'alto_risco', 'tempo_insuficiente', 'atualizacoes'];

        if (!vote || !validVotes.includes(vote)) {
            return res.status(400).send({message: 'Voto inválido ou não fornecido.'});
        }

        const result = await votesCollection.findOneAndUpdate(
            {voto: vote},
            {$inc: {contador: 1}},
            {upsert: true, returnDocument: 'after'}
        );

        console.log(`Voto ${vote} registrado. ${result}`);
        res.status(200).send({message: 'Voto registrado com sucesso.', newCount: result});

    } catch (error) {
        console.error('Erro ao inserir voto no banco de dados: ', error);
        res.status(500).send({ message: 'Erro ao processar seu voto.', error: error.message});
    }
});


app.get('/api/votes', async (req, res) => {
    try {
        const db = mongoose.connection.db;
        const votesCollection = db.collection('enquete_votes');
        const validVotes = ['falta_de_dados', 'dificuldade_prever', 'alto_risco', 'tempo_insuficiente', 'atualizacoes'];
        // Find documents for the valid vote types
        const votesData = await votesCollection.find({ voto: { $in: validVotes } }, { projection: { _id: 0, voto: 1, contador: 1 } }).toArray();
        // Format the data into the desired JSON structure
        const formattedVotes = votesData.reduce((acc, voteDoc) => {
            acc[voteDoc.voto] = voteDoc.contador;
            return acc;
        }, {});
        // Ensure all valid vote types are included, even if count is 0
        const finalVotes = validVotes.reduce((acc, voteType) => {
            acc[voteType] = formattedVotes[voteType] || 0; // Use 0 if no document found for the type
            return acc;
        }, {});
        res.status(200).json(finalVotes);
    } catch (error) {
        console.error('Erro ao inserir voto no banco de dados: ', error);
        res.status(500).send({ message: 'Erro ao processar seu voto.', error: error.message});
    }

});