
export const Modal = ({ modalTitle = "Delete Employee", modalMessage = "Are you sure to delete this employee ?", actionMessage = "Delete", actionButtonColor = "bg-red-700", onClickAction = () => { }, displayModal = "hidden", cancelAction = () => { } }) => {




    const className = {
        container: `${displayModal} w-full h-full relative overflow-hidden`,
        modalContainer: "w-80 h-56 p-5 font-AzoSans bg-[#F5F5F5] rounded-xl space-y-10 absolute left-2/4 top-1/3 -translate-x-2/4 -translate-y-1/4",
        modalTitle: "w-full h-auto px-5 font-bold text-lg",
        modalMessage: "text-sm",
        modalButtonsContainer: "w-full flex justify-between",
        cancelButton: "bg-[#DB9936] w-32 h-12 rounded-lg text-white",
        actionButton: `${actionButtonColor} w-32 h-12 rounded-lg text-white`,
    }

    return (
        <div className={className.container}>
            <div className={className.modalContainer}>
                <div className={className.modalTitle}>
                    {modalTitle}
                </div>
                <div className={className.modalMessage}>
                    {modalMessage}
                </div>
                <div className={className.modalButtonsContainer}>
                    <button onClick={cancelAction} className={className.cancelButton}>
                        Cancel
                    </button>
                    <button onClick={onClickAction} className={className.actionButton}>
                        {actionMessage}
                    </button>
                </div>
            </div>
        </div>
    );
} 