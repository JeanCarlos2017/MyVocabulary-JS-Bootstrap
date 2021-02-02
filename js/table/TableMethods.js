class TableMethod{
    constructor(){
        this.idInput= "myInput";
        this.idTable = "tableView";

    }

    //funções para fazer filtro de palavras
    filterWords() {
        //https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_table
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("tableView");
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

    deleteRow(){
        console.log("deleteRow ainda não está suportado");
    }

    editRow(){
        console.log("editRow ainda não está suportado")
    }
}