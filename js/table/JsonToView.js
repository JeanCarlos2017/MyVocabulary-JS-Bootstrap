class JsonToView{
    //recebe um JSON, converte para array e joga para uma tabela
    //recebe a div que eu vou por os dados - vocabularioView

    constructor(dataJson, idView) {
        this.data = dataJson;
        this.idView = idView;
        this.toView();
    }

    toView = function(){
        this.data = JSON.parse(this.data); //json to array
        //console.log(this.data);
        let countRow = document.getElementById(this.idView).rows.length;
        for( let d in this.data){
           this.appendRow(this.data[d], countRow);
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
        let formattedDate= ((date.getDate() )) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear();
        return formattedDate;
        //return date;
    }


}