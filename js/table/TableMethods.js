class TableMethod{
    constructor(){
        this.idInput= "myInput";
        this.idTable = "tableView";
        this.idAddWord= "painelPalavra";
        this.visibileRow = false;
        this.countWords = 0;
        this.limitWords= 10; //depois que atingir o limite de palavras sem salvar o usuário é alertado
    }

    //funções para fazer filtro de palavras
    filterWords() {
        //https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_table
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById(this.idInput);
        filter = input.value.toUpperCase();
        table = document.getElementById(this.idTable);
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }


    addWordTable(){
        //adiciona palavra
        //forma o objeto com os campos digitados no formulário
        let row= [
            {
                "Palavras": document.getElementById("inputPalavra").value,
                "Significado": document.getElementById("inputSignificado").value,
                "Pronuncia GG": document.getElementById("inputPronunciaGG").value,
                "Pronuncia BR":  document.getElementById("inputPronunciaBR").value,
                "Data aprendizado": new Date()
            }
        ]
        let jsonToView= new JsonToView("tableView");
        jsonToView.toView(JSON.stringify(row));
        //incrementa a quantidade de palavras sem salvar
        this.countWords++;
        if( this.countWords === this.limitWords ){
            alert("Você já tem "+ this.limitWords+" palavras sem salvar!");
            this.countWords= 0;
        }

        //some elemento
        this.viewAddRow();

    }
    cleanFields(){
        document.getElementById("inputPalavra").value= "";
        document.getElementById("inputSignificado").value="";
        document.getElementById("inputPronunciaGG").value="";
        document.getElementById("inputPronunciaBR").value= "";
    }
    openWordTable(){
       this.cleanFields();
       this.viewAddRow();

    }
    closeAddWord(){
        this.viewAddRow();
    }
    deleteRow(){
        console.log("deleteRow ainda não está suportado");
    }

    editRow(){
        console.log("editRow ainda não está suportado")
    }

    viewAddRow(){
        const elem = document.getElementById(this.idAddWord);
        if(this.visibileRow) {
            elem.style.display = "none";
            this.visibileRow= false;
        }else{
            elem.style.display = "block";
            this.visibileRow= true;
        }
    }
}