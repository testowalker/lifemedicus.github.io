<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Ensure jQuery and datepicker are loaded before initializing
        if (typeof $ !== 'undefined' && $.fn.datetimepicker) {
        $('#appointmentDate').datetimepicker();
        } else {
        console.error('jQuery or datetimepicker is not loaded.');
        }

    document.getElementById('telegramForm').addEventListener('submit', function(event) {
        event.preventDefault();
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const doctor = document.getElementById('doctor').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const problem = document.getElementById('problem').value;

    fetch('/api/sendmessage', {
        method: 'POST',
    headers: {
        'Content-Type': 'application/json',
                },
    body: JSON.stringify({name, mobile, doctor, appointmentDate, problem}),
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
        });
    });
</script>
