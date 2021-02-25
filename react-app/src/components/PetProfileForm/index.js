import React, { useState } from 'react';
import { Modal } from '../../context/ModalAndAuth';
import PetProfileForm from './petProfileForm';

export default function PetProfileModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Add Pet</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <PetProfileForm />
        </Modal>
      )}
    </>
  );
}
