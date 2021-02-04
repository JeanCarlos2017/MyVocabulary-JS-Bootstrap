class ReportView{

    constructor(){
        this.idTable= "tableReport";
        this.idSection= "relatorioId";

    }

    reportView(){
        this.viewReportSection();
        //dataCollector
        let dataCollector = new DataCollector();
        if (document.getElementById(this.idSection).style.display === "block") {
            dataCollector.countWordDay();
            for (let i in dataCollector.vectorData) {
                //forma o objeto com a data e quantidade de vezes que ela apareceu
                let row = {
                        "id": i,
                        "Dia": dataCollector.vectorData[i],
                        "Quantidade Palavras Aprendidas": dataCollector.vectorCount[i]
                    };
                this.appendRow(row);
                //this.addRow(row);
            }
        }
    }
    addRow(row) {
        let table = document.getElementById(this.idTable);
        console.log(table);
        let linha = table.insertRow(0);
        let id = row.insertCell(0);
        let dia = row.insertCell(1);
        let qntPalavra = row.insertCell(2);
        id.innerHTML = row["id"];
        dia.innerHTML = row["Dia"];
        qntPalavra.innerHTML = row["Quantidade Palavras Aprendidas"];
    }

    appendRow(row){
        let rowTable = "<tr>"+
            "<td>"+row["id"]+"</td>"+
            "<td>"+row["Dia"]+"</td>"+
            "<td>"+row["Quantidade Palavras Aprendidas"]+"</td>"+
            "</tr>";
        $("#tableReport tr:last").after(rowTable);
    }

    closeReportView(){
        this.viewReportSection();
    }
    viewReportSection(){
        const elem = document.getElementById(this.idSection);
        if(this.visibileRow) {
            elem.style.display = "none";
            this.visibileRow= false;
        }else{
            elem.style.display = "block";
            this.visibileRow= true;
        }
    }
}