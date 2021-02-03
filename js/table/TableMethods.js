class TableMethod{
    constructor(){
        this.idInput= "myInput";
        this.idTable = "tableView";
        this.idAddWord= "painelPalavra";
        this.visibileRow = false;

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
        console.log("addWordTable ainda não está suportado");
        //adiciona palavra
        //forma o objeto com os campos digitados no formulário
        let row= [
            {
                "Palavras ": document.getElementById("inputPalavra").value,
                "Significado": document.getElementById("inputSignificado").value,
                "Pronuncia GG": document.getElementById("inputPronunciaGG").value,
                "Pronuncia BR":  document.getElementById("inputPronunciaBR").value,
                "Data aprendizado": new Date()
            }
        ]
        //let countRow = document.getElementById("tableView").rows.length;
        let jsonToView= new JsonToView("tableView");
        jsonToView.toView(JSON.stringify(row));
        //chama função que salva a tabela em um arquivo

        //some elemento
        this.viewAddRow();

    }

    openWordTable(){
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