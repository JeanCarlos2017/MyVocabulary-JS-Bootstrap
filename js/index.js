//aqui terá todo os script que está no index.HTML

//le o arquivo e coloca os dados na tela
const fileSelector = document.getElementById('file-selector');
fileSelector.addEventListener('change', (event) => {
    let fileXLSX;
    let jsonToView= new JsonToView("tableView");
    const fileList = event.target.files;
    //chamar o FileXLSX
    fileXLSX = new FileXLSX();
    fileXLSX.xlsxToJson(fileList[0]).then(()=> {
        //dados do arquivo excel

        let data = fileXLSX.data; //fazer isso ser um for
        //chamar JsonToView -- jogar os dados JSON na tabela
        data.forEach( d=>{
            //cada planilha do arquivo Excel assume uma posição do array data
            jsonToView.toView(d);
        })
    })
});

//eventos na tabela
var table_interaction= new TableMethod();

