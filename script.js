< !DOCTYPE html >
    <html lang="en">

        <head>
            <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>API</title>
                    </head>
                    <style>
                        #mainContainer {
                            display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        gap: 15px;
    }

                        .dataClass {
                            border: 2px solid tomato;
                        padding: 10px;
                        border-radius: 10px;
    }

                        .btn_reload {
                            border: 2px solid tomato;
                        color: rgb(255, 72, 40);
                        padding: 8px 12px;
                        margin: 20px;
    }

                        #specificDataShow {
                            background - color: rgb(231, 234, 236);
                        padding: 10px;
                        padding-left: 37%;
    }
                    </style>

                    <body>
                        <section id="specificDataShow">

                        </section>
                        <button onclick="getAllData()" class="btn_reload">Reload Data</button>
                        <div id="mainContainer">

                        </div>

                        <script src="countriesAPI.js"></script>
                    </body>

                </html>