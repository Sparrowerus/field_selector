document.addEventListener('DOMContentLoaded', function() {
    var typeSelect = document.querySelector('[name="type_val"]');
    var fields = document.querySelectorAll('input[name^="input_"]');

    function updateFields() {
        var selectedValue = typeSelect.value;
        
        fields.forEach(function(field) {
            field.parentElement.style.display = 'none';
        });

        fields.forEach(function(field) {
            var fieldName = field.getAttribute('name').replace('input_', '');
            if (fieldName === selectedValue) {
                field.parentElement.style.display = '';
            }
        });
    }

    typeSelect.addEventListener('change', updateFields);

    updateFields();
});
