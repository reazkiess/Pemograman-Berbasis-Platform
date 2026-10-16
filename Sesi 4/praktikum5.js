let studentData = {
    name : "Andi",
    java_programming_score : 80,
    python_programming_score : 100,
    javascript_programming_score : 80,
    infoStudent: function(){
        return (
            "name : " + this.name + "\n" +
            "Java Score : " + this.java_programming_score + "\n" +
            "Python Score : " + this.python_programming_score + "\n" +
            "JS Score : " + this.javascript_programming_score + "\n" + 
            "ID_Number : " + this.id_number + "\n" 
        )
    }
}

studentData.id_number = "1102020"
console.log(studentData.infoStudent());
delete studentData.id_number;
console.log(studentData.infoStudent());
