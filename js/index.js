//aqui terá todo os script que está no index.HTML

//le o arquivo e coloca os dados na tela
const fileSelector = document.getElementById('file-selector');
fileSelector.addEventListener('change', (event) => {
    let leitor_arquivoXLSX;
    let toView;
    const fileList = event.target.files;
    //chamar o leitorArquivoXLSX
    leitor_arquivoXLSX = new LeitorArquivoXLSX(fileList[0]);
    leitor_arquivoXLSX.xlsxToJson().then(()=> {
        //dados do arquivo excel

        let data = leitor_arquivoXLSX.data; //fazer isso ser um for
        //chamar JsonToView -- jogar os dados JSON na tabela
        data.forEach( d=>{
            //cada planilha do arquivo Excel assume uma posição do array data
            toView = new JsonToView(d,"tableView");
        })
    })
});





//funcções para adicionar palavra na tabela

//funçções para para salvar a tabela em u arquivo
