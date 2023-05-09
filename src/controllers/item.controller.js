const axios = require('axios');
const itemService = require('../services/item.service');

const getItem = async (req, res) => {
    const item = "Frostmourne";

    res.send({item: item});
}

const getAllItem = async (req, res) => {
    const item = await itemService.selectAll();

    item.map((e) => {
        console.log(e.id, e.name)
    })

    res.send({item: item});
}

const createItem = async (req, res) => {
    var startingItem = 2429;
    try {
        
            try{
                do{
                    const response = await axios.get(`https://us.api.blizzard.com/data/wow/search/item?namespace=static-us&orderby=id&_pageSize=1000&id=[${startingItem},]&_page=1&access_token=EUpUIifrPDYYdxfu5Ot87w3uQSZ8U7QFIr`);
                    
                    await Promise.all(response.data.results.map(async (e) => {
                    let body = {
                        "id": e.data.id,
                        "name": e.data.name.pt_BR
                    };
                    
                    await itemService.create(body);
                    }));

                    console.log(response.data.results[response.data.results.length - 1].id);

                    startingItem = response.data.results[response.data.results.length - 1].id;

                    console.log(`Pagina ${startingItem} cadastrada com sucesso`);
                }while(count(response.data.results) > 0)
            }catch(error){
                console.log(`Erro ao cadastrar itens na pagina ${startingItem}`);
            }
        
        res.send("Cadastrado com sucesso");
      } catch (error) {
        console.log(error);
        res.status(500).send("Erro ao cadastrar itens");
      }
}

module.exports = {getItem, getAllItem, createItem}