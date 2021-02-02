class LeitorArquivoXLSX{

    //no momento só aceita um único arquivo
    constructor(file){
        this.file=file;
        this.idTable = "vocabularioView";
        this.data;
    }

    async parseExcel() {
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

            reader.readAsBinaryString(this.file)
        });
           
    };



    async xlsxToJson(){
        try {
            const fileContents = await this.parseExcel();
            this.data = fileContents;
        } catch (e) {
            console.warn(e.message)
        }finally {
            this.imprimeData();
        }
    }

    imprimeData(){
        jQuery('#xlx_json').val("fileContents: "+this.data);
    }
}