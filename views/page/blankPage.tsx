import * as elements from 'typed-html';

export const blankPage = (bodyInnerHtml: string,title: string) => {
    return(
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{title}</title>
                <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
                <script src="https://unpkg.com/htmx.org@1.9.3" integrity="sha384-lVb3Rd/Ca0AxaoZg5sACe8FJKF0tnUgR2Kd7ehUOG5GCcROv5uBIZsOqovBAcWua" crossorigin="anonymous"></script>
                <script src="https://cdn.tailwindcss.com"></script>
            </head>
            <body>
                {bodyInnerHtml}
            </body>
        </html>
    );
}
   
