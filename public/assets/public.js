'use strict';
(async () => {
  const $siteURL = document.querySelector('#site-url')
  const $submitButton = document.querySelector('#submit-button')
  const $json = document.querySelector('#json')
  const $spinner = document.querySelector('#spinner')
  $spinner.hidden = true

  const scanWebiste = async url => {
    $spinner.hidden = false
    const json = await (await fetch(`scan?url=${url}`)).json()
    $json.textContent = JSON.stringify(json)
    $spinner.hidden = true
  }

  const onSubmit = () => {
    scanWebiste($siteURL.value)
  }

  $siteURL.addEventListener('keyup', e => {
    $submitButton.disabled = !$siteURL.checkValidity()  
  })

  $siteURL.addEventListener('keydown', e => {
    if (e.keyCode == 13) {
      onSubmit()
    }
  })

  $submitButton.addEventListener('click', e => {
    e.preventDefault()
    onSubmit()
  })
})();
