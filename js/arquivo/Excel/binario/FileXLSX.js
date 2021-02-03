class FileXLSX{

    //no momento só aceita um único arquivo
    constructor(file){
        this.idTable = "tableView";
        this.data;
    }

    async parseExcel(file) {
        return new Promise((resolve, reject) => {
            var reader = new FileReader();
            reader.onload = function (e) {
                var data = e.target.result;
                var workbook = XLSX.read(data, {
                    type: 'binary',
                    cellDates:true,
                    dateNF:'dd.mm.yyyy'
                });
                var dadosToJson = [];
                workbook.SheetNames.forEach(function (sheetName) {
                    // Here is your object
                    var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                    var json_object = JSON.stringify(XL_row_object);
                    dadosToJson.push(json_object);
                })
                resolve(dadosToJson);

            }

            reader.onerror = function (ex) {
                reader.abort();
                reject(console.warn(ex));
            };
            reader.readAsBinaryString(file)
        });
           
    };



    async xlsxToJson(file){
        try {
            const fileContents = await this.parseExcel(file);
            this.data = fileContents;
        } catch (e) {
            console.warn(e.message)
        }
    }
    saveFileAux(s){
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i=0; i<s.length; i++) {
            view[i] = s.charCodeAt(i) & 0xFF;
            if (i ===0 )console.log(view[i])
        }
        return buf;
    }
    saveFile(){
        var wb = XLSX.utils.table_to_book(document.getElementById(this.idTable), {sheet:"Meu vocabulário", raw: true} );
        //console.log(wb["Data aprendizado"].v); //  default v value '4.56'
        var wbout = XLSX.write(wb, {bookType:'xlsx', bookSST:true, type: 'binary'});
        saveAs(new Blob([this.saveFileAux(wbout)],{type:"application/octet-stream"}), 'VocabularioAux.xlsx');
    }
}