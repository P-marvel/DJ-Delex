function makePayment() {
    const txRef = "REUNION_" + Date.now();

    var handler = PaystackPop.setup({
      key: 'pk_test_7fb8e7fb4150d8a589c804272a3f6c5a41048d3c',
      email: 'marvelouspopoola@gmail.com',
      amount: 500000, // 5000 NGN
      currency: 'NGN',
      ref: txRef,
      metadata: {
        custom_fields: [
          {
            display_name: "DJ Delex Christmas Party",
            variable_name: "party_ticket",
            value: "Party ticket payment"
          }
        ]
      },
      callback: function(response) {
        enableForm(response.reference);
      },
      onClose: function() {
        alert('Payment window closed.');
      }
    });

    handler.openIframe();
  }

  function enableForm(txRef) {
    const form = document.getElementById('regForm');
    form.classList.remove('disabled');
    [...form.elements].forEach(el => {
      el.disabled = false;
    });
    document.getElementById('tx_ref').value = txRef;

    window.scrollTo({ top: document.querySelector('.register').offsetTop, behavior: 'smooth' });
  }

  document.getElementById('regForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('status').innerText = "Registration submitted successfully!";
    // Optionally send form data to your server here
  });