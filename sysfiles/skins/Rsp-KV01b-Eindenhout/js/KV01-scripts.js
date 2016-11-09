        $(document).ready(function () {
			$('#searchbox input.searchInputField').attr('placeholder','Zoeken in site...');
			$('#searchbox input[type=button]').attr('value',' ');
			$('#searchbox input[type=button]').attr('class','button');
			$('#divLogin .divDataEntryButtons input').attr('class','small round button');
			// add active-parent class to parent-link of active menu-item 
			$( ".top-bar-section li.active" ).parents('li').addClass( "active-parent" );
        });
