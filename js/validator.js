function gtag_report_conversion(url) 
      { var callback = function () { 
        if (typeof (url) != 'undefined'){
          window.location = url; 
        } 
      }; 
      gtag('event', 'conversion', { 
        'send_to': 'AW-437423627/pSwPCPngrPQBEIucytAB',
        'event_callback': callback 
      });
      return false; }


$('document').ready(function () {


  // Validación para campos de texto exclusivo, sin caracteres especiales ni números
  var nameregex = /^[a-zA-Z ]+$/
  $.validator.addMethod('validname', function (value, element) {
    return this.optional(element) || nameregex.test(value)
  })
  // Máscara para validación de Email
  var eregex = /^([a-zA-Z0-9_.\-+])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/
  $.validator.addMethod('validemail', function (value, element) {
    return this.optional(element) || eregex.test(value)
  })
  //Validar numero
  var phoneregex = /^[0-9]{3,16}$/
  $.validator.addMethod('validnumber', function (value, element) {
    return this.optional(element) || phoneregex.test(value)
  })
  $('#formulario-contacto').validate({
    rules: {
      nombre: {
        required: true,
        minlength: 8,
      },
      email: {
        required: true,
        validemail: true,
      },
      phone: {
        required: true,
        validnumber: true,
      },
      mensaje: {
        required: true,
        minlength: 20,
        maxlength: 300,
      },
    },
    messages: {
      nombre: {
        required: 'Tu Nombre y Apellidos son Importantes',
        minlength: 'Tu Nombre es demasiado corto',
      },
      email: {
        required: 'Por Favor, introduzca una dirección de correo',
        validemail: 'Introduzca correctamente su ',
      },
      phone: {
        required: 'Por Favor, introduzca un teléfono',
        validnumber: 'Introduzca solo numeros en el telefono',
      },
      mensaje: {
        required: 'Tu Nombre y Apellidos son Importantes',
        minlength: 'Tu Mensaje es demasiado corto',
        maxlength: 'Tu Mensaje supera los 300 caracteres',
      },
    },
    errorPlacement: function (error, element) {
      $(element).closest('.form-group').find('.help-block').html(error.html())
    },
    highlight: function (element) {
      $(element)
        .closest('.form-group')
        .removeClass('has-success')
        .addClass('has-error')
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element)
        .closest('.form-group')
        .removeClass('has-error')
        .addClass('has-success')
      $(element).closest('.form-group').find('.help-block').html('')
    },
    submitHandler: function (form) {
      form.action = '../enviar.php'
      form.submit()
      alert('Formulario enviado correctamente')
    },
  })
})
