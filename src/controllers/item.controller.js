const axios = require('axios');
const itemService = require('../services/item.service');

const getItem = async (req, res) => {
    const item = "Frostmourne";

    res.send({item: item});
}

const getAllItem = async (req, res) => {
    const item = await itemService.selectAllLimit();
    
    res.send({item: item});
}

const updateOrCreateItem = async (req, res) => {
    var startingItem = 1;
    let response = null;
    try {
        do{
            try{
                response = await axios.get(`https://us.api.blizzard.com/data/wow/search/item?namespace=static-us&orderby=id&_pageSize=1000&id=[${startingItem},]&_page=1&access_token=EUCmIEyxYWX8MoF4OFyiJHZ6aLcBS0kQd0`);
                
                await Promise.all(response.data.results.map(async (e) => {
                let body = {
                    "id": e.data.id,
                    "name": e.data.name.pt_BR
                };
                
                await itemService.updateOrCreate(body);
                }));
                startingItem = response.data.results[response.data.results.length - 1].data.id;

                console.log(`Pagina ${startingItem} cadastrada com sucesso`);
            }catch(error){
                console.log(`Erro ao cadastrar itens na pagina ${startingItem}`);
            }
        }while(response.data.results.length > 0)
        res.send("Cadastrado com sucesso");
      } catch (error) {
        console.log(error);
        res.status(500).send("Erro ao cadastrar itens");
      }
}

const updateOrCreateItemMedia = async (req, res) => {
    try {
        let start = 0;
        let end = 2000;
        let item;
        do{
            item = await itemService.selectPart(start, end);
            item.forEach( async (element) => {
                try{
                    response = await axios.get(`https://us.api.blizzard.com/data/wow/media/item/${element.id}?namespace=static-us&locale=en_US&access_token=EUCmIEyxYWX8MoF4OFyiJHZ6aLcBS0kQd0`);

                    let body = {
                        "id": element.id,
                        "media": response.data.assets[0].value
                    };
                    
                    await itemService.updateOrCreateMedia(body);

                    console.log(`Imagem do item ${element.name} cadastrada com sucesso`);
                }catch(error){
                    console.log(`Erro ao cadastrar imagem do item ${element.name} - ${error.code} - ${element.id}`);
                }
            });
            start = end;
            end = end + 2000;
        }while(item.length > 0);
        res.send("Cadastrado com sucesso");

      } catch (error) {
        console.log(error);
        res.status(500).send("Erro ao cadastrar itens");
      }
}

module.exports = {getItem, getAllItem, updateOrCreateItem, updateOrCreateItemMedia}