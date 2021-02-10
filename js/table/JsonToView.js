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
       this.eventEdit();
    }

    appendRow(row, id){
        let rowTable = "<tr>"+
                "<td>"+id+"</td>"+
                "<td>"+this.formatRow(row["Palavras"])+"</td>"+
                "<td>"+this.formatRow(row["Significado"])+"</td>"+
                "<td>"+this.formatRow(row["Pronuncia GG"])+"</td>"+
                "<td>"+this.formatRow(row["Pronuncia BR"])+"</td>"+
                "<td>"+this.formatDate(row["Data aprendizado"])+"</td>"+
                "<td> <button onclick=\"table_interaction.deleteRow()\" type=\"button\" class=\"btn btn-outline-secondary\" ><i class=\"bi bi-trash\"></i></button></td>"+
                "<td>  <button onclick=\"table_interaction.editRow()\" type=\"button\" class=\"btn btn-outline-secondary\" ><i class=\"bi bi-pencil\"></i> </button></td>"+
              "</tr>";
        $("#vocabularioView").find('tbody').append(rowTable);
        //this.newRow(row, id);
        //$("#vocabularioView tr:last").after(rowTable);

    }

    eventEdit(){
        $("#vocabularioView tbody tr td").dblclick(function(){
            let conteudoOriginal= $(this).text();
            let input= $('<input>', {type: 'text', value: conteudoOriginal});
            $(this).html(input.blur(function(){
                let conteudoNovo= $(this).val();
                $(this).parent().html(conteudoNovo);
            }));
        });
    }

    formatDate(dateIn){
        //se a data nao foi formatada, então formata
        let dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
        if (dateIn.match(dateformat)) return dateIn;
        else{
            let date = new Date(dateIn);
            return ((date.getDate() )) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear();
        }


    }

    formatRow(column){
        if(column === undefined) return "";
        else return column;
    }

}