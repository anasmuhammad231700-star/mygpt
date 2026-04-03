import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/chat", async (req, res) => {
    const userMessage = req.body.message;
    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                    { role: "system", content: "Rispondi come ChatGPT, utile e naturale." },
                    { role: "user", content: userMessage }
                ]
            })
        });
        const data = await response.json();
        res.json({ reply: data.choices[0].message.content });
    } catch {
        res.json({ reply: "Errore server 😢" });
    }
});

app.listen(3000, () => console.log("Server attivo: http://localhost:3000"));
