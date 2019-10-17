<div style="margin:auto;padding:2em;width:450px;align:center;margin-top:12em;background-color:#efd392;">

	<div class="ui form">
	<h1 class="ui dividing header">Prijava korisnika</h1>
	    <div class="ui twelwe wide field">
	        <label for="username" >Korisničko ime</label>
	        <input type="text" id="username">
	    </div>

	    <div class="ui twelwe wide field">
	    	<label for="password" >Lozinka</label>
	        <input type="password" id="password">	        
	    </div>

		<div class="ui twelwe wide field">
			<label for="client_name">Radna baza</label>
			<input type="text" id="client_name">
		</div>

		<div class="ui checkbox twelwe wide field">
	  		<input type="checkbox" name="save_login">
	  		<label>Spremiti prijavu</label>  		  		
		</div>    

		<div class="ui twelwe wide field" align="right">
			<div class="ui right pointing red basic label" style="visibility: hidden" id="error">
				Prijava nije uspijela !
		     </div>
			<button class="ui primary button" id="login_button">Prijava</button>		    
		    <button class="ui primary button">Prekid</button>		     		    
		</div>
	</div>
</div>
</div>

<script>

$(document).ready(()=>{

$( "#login_button" ).click(()=> {
								
			$.get( "/erp/login/"+$("#username").val()+"/"+$("#password").val(), (user)=>{			  				  	

					$.get( "/erp/user_detail/"+user.id, (user_detail)=>{
							home_page.set("user_detail", user_detail);														
						});					
										
			 	 	  $("#error").css("visibility","hidden");		

			 	 	  home_page.set("user", user);								

			 	 	  setCookie("orbis.erp.login", user.id, 1); //  min			 	 	  

			 	 	  window.location = '/';

			}).fail(function() {
			 	 	$("#error").css("visibility","visible");
		});
			
  	});
	

});



</script>