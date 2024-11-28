import * as dotenv from "dotenv";
dotenv.config();

import app from "./src/application/entrypoints/app_express"

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});