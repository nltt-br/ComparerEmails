//verificar a label correspondente, copiar tudo que esta dentro da label para uma lista
function main_reader_mail(){
	
  //label 1, inicialização das variaveis
	var label1_cmp = GmailApp.getUserLabelByName("x");
	var threads1_cmp = label1_cmp.getThreads();
  var list_subject_compare_1 = []
  var position = []

  //main da label 1 para fazer comparação
  for (var i=0; i < threads1_cmp.length; i++) {
    var messages = threads1_cmp[i].getMessages();
    for (var j= 0; j<messages.length; j++){
      var regex = new RegExp(/Nome da Proteção:\s.*/);
      var e = regex.exec(messages[j].getPlainBody());

      if (e){
          position = i
          list_subject_compare_1[i] = e
        }
      }
    }

  //label 2, inicialização das variaveis
  var label2_cmp = GmailApp.getUserLabelByName("teste2");
	var threads2_cmp = label2_cmp.getThreads();
  var list_subject_compare_2 = []

  //main da label 2 para fazer comparação
    for (var i=0; i < threads2_cmp.length; i++) {
    var messages = threads2_cmp[i].getMessages();
    for (var j= 0; j<messages.length; j++){
      var regex = new RegExp(/Nome da Proteção:\s.*/);
      var e = regex.exec(messages[j].getPlainBody());
      
      if (e){
        position[i] = i
        list_subject_compare_2[i] = e
      }
    }
  } 

  var comp = 0
  //varrer as duas listas e comparar os valores armazenados nos campos do assunto ja filtrado na regex acima
  for (var xa = 0, xb = 0; xa < list_subject_compare_2.length, xb < list_subject_compare_1.length; xa++, xb++){
    if (list_subject_compare_2[xa] == list_subject_compare_2[xb]){
        comp += 1
    }
  } 

  //condicional para ação de mover para a label correta
  if (comp > 0){
    Logger.log("E-mail igual")
    
    for (var i = 0; i < position.length; i++){
      Logger.log(position[i])
    }


  }else{
    Logger.log("E-mail diferente")

    Logger.log(position)

    // for (var i = 0; i < threads1_cmp.length; i++){
    //   threads1_cmp
    // }
  }

}

// function moveUp() {
//     var delayDays = 7 // Enter # of days before messages are moved to trash
//     var maxDate = new Date();
//     maxDate.setDate(maxDate.getDate() - delayDays);
//     var label1 = GmailApp.getUserLabelByName("clients1"); // FROM
//     var label2 = GmailApp.getUserLabelByName("clients2"); // TO
//     var threads = label1.getThreads();
//     for (var i = 0; i < threads.length; i++) {
//         if (threads[i].getLastMessageDate() < maxDate) {
//             threads[i].addLabel(label2).removeLabel(label1).moveToArchive();
//         }
//     }
// }
