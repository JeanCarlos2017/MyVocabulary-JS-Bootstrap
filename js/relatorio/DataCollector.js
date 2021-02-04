class DataCollector{
    vectorData;
    constructor(){
        this.idTable = "tableView";
        this.vectorData= []; // o array com todas as datas que aparece na tabela
        this.vectorCount= []; //o array que armazena quantas vezes cada data apareceu na tabela

    }

    countWordDay(){
        let table, tr, td, txtValue, indexOf;
        table = document.getElementById(this.idTable);
        tr = table.getElementsByTagName("tr");
        for (let i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[5]; //coluna da Data Aprendizado
            if (td) {
                txtValue = td.textContent || td.innerText;
                //procura a data no vetor de datas
                indexOf = this.vectorData.indexOf(txtValue);
                if ( indexOf === -1) {
                    //não encontrou a data
                    this.addDay(txtValue);
                }else{
                    this.vectorCount[indexOf]++;
                }
            }
        }
        //console.log(this.vectorCount);
    }

    addDay(day){
        //adiciona a data no array de datas
        this.vectorData.push(day);
        //agora a ultima posição do vectorCount vai armazenar a quantidade que essa data aparece na tabela
        let index= this.vectorCount.length;
        this.vectorCount[index] = 1; 
    }


}