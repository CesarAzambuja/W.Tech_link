function alert() {
  const modal = document.querySelector(".modal");
  const modalOverlay = document.querySelector(".modal-overlay");

  modal.classList.add("ativo");
  modalOverlay.classList.add("ativo");

  modalOverlay.innerHTML = `<h2>QR CODE</h2>
   <img src="image/qrcode.png" alt="QR CODE">
    
    <div class="button-flex">
        <button onclick="closeModal()" class="btn btn-close">Fechar</button>
    </div>
    `;
}

function closeModal() {
  const modal = document.querySelector(".modal");
  const modalOverlay = document.querySelector(".modal-overlay");
  modal.classList.remove("ativo");
  modalOverlay.classList.remove("ativo");
}
