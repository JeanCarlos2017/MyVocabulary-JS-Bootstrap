class LeitorArquivoCSV{
    constructor(file){
        this.file = file;
        this.vetor_vocabulario = [];
        this.leitorArquivo()

    }

    getData(){
        //Initialize the FileReader object to read the 2file
        let encoding = "utf-8";
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            var fileContents = document.getElementById('xlx_json');
            fileContents.innerText = fileReader.result;
        }
        return fileReader.readAsText(this.file, encoding);
    }


    leitorArquivo(){
        this.getData();
    }
}