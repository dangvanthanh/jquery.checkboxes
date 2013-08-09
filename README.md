# Checked and Unchecked Checkboxes

This is a jQuery plugin support checked and unchecked checkboxes

## HTML

	<h3><input type="checkbox" class="selectAll"><span>Select All</span></h3>
	<ul class="list">
		<li><input type="checkbox" id="chk01" name="chk01"><span>Item 01</span></li>
		<li><input type="checkbox" id="chk02" name="chk02"><span>Item 02</span></li>
		<li><input type="checkbox" id="chk03" name="chk03"><span>Item 03</span></li>
		<li><input type="checkbox" id="chk04" name="chk04"><span>Item 04</span></li>
		<li><input type="checkbox" id="chk05" name="chk05"><span>Item 05</span></li>
	</ul>

## USE

	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="checkboxes.min.js"></script>
	<script>
		$(document).ready(function() {
			$('.selectAll').checkboxes({
				itemSelect: 'chk' // name of all child checkbox
			});
		});
	</script>

## CHANGE LOG
- v.1.0.2: Using Gruntjs to customize javascript file.
- v.1.0.1: Validation JSHint	