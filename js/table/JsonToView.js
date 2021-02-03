class JsonToView{
    //recebe um JSON, converte para array e joga para uma tabela
    //recebe a div que eu vou por os dados - vocabularioView

    constructor(idView) {
        this.idView = idView;
    }

    toView = function(dataJson){
        let data = JSON.parse(dataJson); //json to array
        let countRow = document.getElementById(this.idView).rows.length;
        for( let d in data){
           this.appendRow(data[d], countRow);
           countRow++;
       }
    }

    appendRow(row, id){
        let rowTable = "<tr>"+
                "<td>"+id+"</td>"+
                "<td>"+row["Palavras "]+"</td>"+
                "<td>"+row["Significado"]+"</td>"+
                "<td>"+row["Pronuncia GG"]+"</td>"+
                "<td>"+this.formatDate(row["Data aprendizado"])+"</td>"+
                "<td> <button onclick=\"table_interaction.deleteRow()\" type=\"button\" class=\"btn btn-outline-secondary\" ><i class=\"bi bi-trash\"></i></button></td>"+
                "<td>  <button onclick=\"table_interaction.editRow()\" type=\"button\" class=\"btn btn-outline-secondary\" ><i class=\"bi bi-pencil\"></i> </button></td>"+
              "</tr>";
        //$(this.idView).find('tbody').append(rowTable);
        $("#vocabularioView tr:last").after(rowTable);
    }

    formatDate(dateIn){
        let date = new Date(dateIn);
        return ((date.getDate() )) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear();
    }


}