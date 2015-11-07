$('.form').find('input, textarea').on('keyup blur focus', function (e) {

  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight');
			} else {
		    label.removeClass('highlight');
			}
    } else if (e.type === 'focus') {

      if( $this.val() === '' ) {
    		label.removeClass('highlight');
			}
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {

  e.preventDefault();

  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');

  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();

  $(target).fadeIn(600);

});

// new user object created REQUIRES route for POST



function signUpUser () {
  var signUpFirstName = document.getElementById('signUpFirstName').value;
  var signUpLastName = document.getElementById('signUpLastName').value;
  var signUpEmail = document.getElementById('signUpEmail').value;
  var signUpPassword = document.getElementById('signUpPassword').value;
  var User = {
    firstName: signUpFirstName,
    lastName: signUpLastName,
    email: signUpEmail,
    password: signUpPassword,
    applicationData: {
      personalData: {
        habit: {
          value1: '',
          value2: '',
          value3: ''
        },
        cumulative: 0,
        weeklyTotal: 0,
        weeklyContribution: 0,
        bonus: 0
      },
      professionalData: {
        habit: {
          value1: '',
          value2: '',
          value3: ''
        },
        cumulative: 0,
        weeklyTotal: 0,
        weeklyContribution: 0,
        bonus: 0
      },
      financialData: {
        habit: {
          value1: '',
          value2: '',
          value3: ''
        },
        cumulative: 0,
        weeklyTotal: 0,
        weeklyContribution: 0,
        bonus: 0
      }
    }
  };
  $.post('http://localhost:3000/signup', User);
}

function loginUser () {
  var loginEmail = document.getElementById('loginEmail').value;
  var loginPassword = document.getElementById('loginPassword').value;
  var Credentials = {
    email: loginEmail,
    password: loginPassword
  };
  $.post('http://localhost:3000/login', Credentials);
}
