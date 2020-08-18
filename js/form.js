function post(path, parameters) {
  var form = $('<form></form>');

  form.attr("method", "post");
  form.attr("action", "");

  $.each(parameters, function(key, value) {
      let field = $('<input></input>');
      

      field.attr("type", "visible");
      field.attr("name", key);
      field.attr("value", value);

      form.append(field);
      
  });

  // The form needs to be a part of the document in
  // order for us to be able to submit it.
  $(document.body).append(form);
  form.submit();

 
}

document.body.innerHTML += '<form id="dynForm" action="http://example.com/" method="post"><input type="hidden" name="q" value="a"></form>';
document.getElementById("dynForm").submit();



