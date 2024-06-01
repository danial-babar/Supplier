import CommonButton from "@/components/commonButton";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import React from "react";

type Props = {
  isOpen: boolean;
  header?: string;
  buttonText: string;
  message?: string;
  onClose: () => void;
  onConfirm: () => void;
  loading?: boolean;
};

const WarningModal = ({
  isOpen,
  buttonText,
  header,
  message,
  onClose,
  onConfirm,
  loading,
}: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      hideCloseButton
      className="p-4 items-center self-center"
    >
      <ModalContent>
        <>
          <ModalHeader className="flex justify-between items-center" dir="rtl">
            <label htmlFor="">{header}</label>
          </ModalHeader>
          <ModalBody>
            <p className="text-black text-[14px] font-rbRegular text-center">
              {message}
            </p>
            <CommonButton
              text={buttonText || "Title"}
              bgColor="#F84F39"
              onPress={onConfirm}
              loading={loading}
            />
          </ModalBody>
        </>
      </ModalContent>
    </Modal>
  );
};

export default WarningModal;
