import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/formdata', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err))

const FormSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String
})

const FormModel = mongoose.model('Form', FormSchema)

app.post('/api/submit', async (req, res) => {
    try {
        const form = new FormModel(req.body)
        await form.save()
        res.status(200).json({ message: 'Data saved' })
    } catch (error) {
        res.status(500).json({ error: 'Error saving data' })
    }
})

app.listen(5000, () => console.log('Server running on http://localhost:5000'))
