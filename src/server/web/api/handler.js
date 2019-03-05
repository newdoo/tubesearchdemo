const router = { youtube: require('./youtube'), udemy: require('./udemy') }

const toJson = data => JSON.parse(data)

module.exports = async(req, res) => {
  try {
    //const recv = await crypto.decipher(req.params.msg.toString('hex'));
    //console.log('\nrecv : ' + req.params.id + ' => ' + recv);
    const recv = req.params.msg;
    console.log(req.params.id);
    console.log(recv);

    const result = await router[req.params.id](toJson(recv));
    //res.json(await crypto.encryption(result));
    res.json(JSON.stringify(result));
    console.log('\nsend : ' + JSON.stringify(result));
  } catch (e) {
    //res.json(await crypto.encryption({result: e.message}));
    res.json({result: e.mseeage});
  }
}