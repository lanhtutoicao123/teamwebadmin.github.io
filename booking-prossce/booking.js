// Wait for the DOM to be fully loaded before accessing elements
$(document).ready(function() {
    // Initialize Bootstrap DateTimePicker
    $('#datetimepicker').datetimepicker({
        format: 'YYYY-MM-DD HH:mm:ss',
        useCurrent: false
    });

    // Handle form submission
    $('#bookingForm').on('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        var name = $('#name').val();
        var email = $('#email').val();
        var datetime = $('#datetime').val();
        var location = $('#location').val();
        var message = $('#message').val();

        // Create an object to store booking information
        var bookingInfo = {
            name: name,
            email: email,
            datetime: datetime,
            location: $('#location option:selected').text(),
            message: message
        };

        // Convert the object to a JSON string
        var bookingInfoStr = JSON.stringify(bookingInfo);

        // Save to localStorage 
        localStorage.setItem('bookingInfo', bookingInfoStr);

        // Reset the form after processing
        $('#bookingForm')[0].reset();

        // Optionally, you can provide feedback to the user that the booking was successful
        alert('Booking successful! Your information has been saved.');
    });
});
