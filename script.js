function makePayment() {
      const ticketAmount = document.getElementById('ticket').value;
      const txRef = "REUNION_" + Date.now();

      var handler = PaystackPop.setup({
        key: 'pk_test_7fb8e7fb4150d8a589c804272a3f6c5a41048d3c', // Replace with your real public key for live
        email: 'marvelouspopoola@gmail.com',
        amount: ticketAmount * 100,
        currency: 'NGN',
        ref: txRef,
        metadata: {
          custom_fields: [
            {
              display_name: "Ticket Type",
              variable_name: "ticket_type",
              value: document.getElementById('ticket').selectedOptions[0].text
            }
          ]
        },
        callback: function (response) {
          // Redirect to Luma after successful payment
          window.location.replace("https://lu.ma/x74uvfwl");
        },
        onClose: function () {
          alert('Payment window closed.');
        }
      });

      handler.openIframe();
    }