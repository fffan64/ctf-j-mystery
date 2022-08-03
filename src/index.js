var express = require('express');
var app = express();
var QRCode = require('qrcode');
const fs = require('fs');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async function(req, res) {
  const str = `yv66vgAAADcAMwoACgAZBwAaCgACABkKAAIAGwoAAgAcCQAdAB4IAB8KACAAIQgAIgcAIwgAJAoA
IAAlBwAmAQAGPGluaXQ+AQADKClWAQAEQ29kZQEAD0xpbmVOdW1iZXJUYWJsZQEACWdldFN0cmlu
ZwEAFihbSSlMamF2YS9sYW5nL1N0cmluZzsBAA1TdGFja01hcFRhYmxlAQAEbWFpbgEAFihbTGph
dmEvbGFuZy9TdHJpbmc7KVYBAApTb3VyY2VGaWxlAQAJRmxhZy5qYXZhDAAOAA8BABZqYXZhL2xh
bmcvU3RyaW5nQnVmZmVyDAAnACgMACkAKgcAKwwALAAtAQAMSGVsbG8gdGhlcmUhBwAuDAAvADAB
AAtGbGFnIGlzOiAlcwEAEGphdmEvbGFuZy9PYmplY3QBAAUjVE9ETwwAMQAyAQAERmxhZwEABmFw
cGVuZAEAGyhDKUxqYXZhL2xhbmcvU3RyaW5nQnVmZmVyOwEACHRvU3RyaW5nAQAUKClMamF2YS9s
YW5nL1N0cmluZzsBABBqYXZhL2xhbmcvU3lzdGVtAQADb3V0AQAVTGphdmEvaW8vUHJpbnRTdHJl
YW07AQATamF2YS9pby9QcmludFN0cmVhbQEAB3ByaW50bG4BABUoTGphdmEvbGFuZy9TdHJpbmc7
KVYBAAZmb3JtYXQBADwoTGphdmEvbGFuZy9TdHJpbmc7W0xqYXZhL2xhbmcvT2JqZWN0OylMamF2
YS9pby9QcmludFN0cmVhbTsAIAANAAoAAAAAAAMAAAAOAA8AAQAQAAAAHQABAAEAAAAFKrcAAbEA
AAABABEAAAAGAAEAAAADAAoAEgATAAEAEAAAAGsAAwAEAAAALbsAAlm3AANMAz0cKr6iABsqHC4c
EApoZAZ6PisdkrYABFeEAgGn/+UrtgAFsAAAAAIAEQAAABoABgAAAAUACAAGABAABwAbAAgAIgAG
ACgACgAUAAAADAAC/QAKBwACAfoAHQAJABUAFgABABAAAAA7AAYAAQAAABuyAAYSB7YACLIABhIJ
BL0AClkDEgtTtgAMV7EAAAABABEAAAAOAAMAAAAOAAgADwAaABAAAQAXAAAAAgAY
`;

  const qrCode = await QRCode.toDataURL(str, {
    color: {
      dark: '#00F',  // Blue dots
      light: '#0000' // Transparent background
    }
  });

  const paramsFlag = fs.readFileSync('./paramsFLAG.txt',
                      {encoding:'utf8', flag:'r'});

  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
  <style>
  </style>
  </head>
  <body>
  <div>
    <p>Would you find the flag ?</p>
    <p>run this </p>
    <img src="${qrCode}" height="300" width="300" />
    <p>with these</p>
    <p>"${paramsFlag}"</p>
    <p>and it should spit out the flag or something close to it.</p>
  </div>
  </body>
  </html>
  `);
});

var server = app.listen(8080, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})