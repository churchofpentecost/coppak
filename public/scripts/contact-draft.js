(function () {
  const form = document.querySelector('form[data-email-draft]');
  if (!form) return;
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    if (values.get('_gotcha')) return;
    const subject = String(values.get('subject') || 'COPPAK website enquiry');
    const body = 'Name: ' + values.get('name') + '\nEmail: ' + values.get('email') +
      '\nPhone / WhatsApp: ' + (values.get('phone') || '') + '\n\n' + values.get('message');
    window.location.href = 'mailto:rev.jamil.nasir@gmail.com?subject=' +
      encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });
})();
