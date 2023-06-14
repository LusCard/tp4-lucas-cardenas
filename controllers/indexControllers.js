function GET(req, res) {
    res.send('Solicitud GET')
  }
function POST(req, res) {
    res.send('Solicitud POST');
  }
function PUT(req, res) {
    res.send('Solicitud PUT');
  }
function DELETE(req, res) {
    res.send('Solicitud DELETE');
  }
  //SEGÚN LA PETICIÓN DE DÓNDE ES LLAMADA CADA FUNCIÓN ENVÍA UN MENSAJE
module.exports = {GET,POST,PUT,DELETE}