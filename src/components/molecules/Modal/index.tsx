// import React from "react";
// import { Modal } from "react-bootstrap";
// import { ButtonComponent, TextString } from "../../atoms";
// import SuccessIcon from "../../../assets/images/successful-icon.png";
// import { ModalProps } from "../@types";

// const ModalView = ({
//   show,
//   handleClose,
//   title,
//   icon,
//   children,
//   buttonDisable,
//   buttonLabel,
//   onClick,
//   titleSize,
//   headerTitle,
//   headerClose,
//   buttonStyle,
//   CloseImg,
//   modalWidth,
//   modalFooter,
//   modalBodyClassName,
// }: ModalProps) => {
//   return (
//     <Modal
//       show={show}
//       onHide={handleClose}
//       animation={true}
//       centered
//       dialogClassName={modalWidth ? modalWidth : "modal-width"}
//     >
//       {CloseImg && (
//         <Modal.Header
//           className="modal-close-btn"
//           style={{
//             justifyContent: "end",
//             cursor: "pointer",
//             borderBottom: "none",
//             padding: "12px 15px 2px 0px",
//           }}
//         >
//           <div className="modal-close">
//             <img
//               src={CloseImg}
//               alt="close_button"
//               onClick={handleClose}
//               className="modal-close-btn"
//             />
//           </div>
//         </Modal.Header>
//       )}
//       {headerTitle && (
//         <Modal.Header
//           className="modal-header-custom"
//           style={{
//             borderBottom: "none",
//             justifyContent: "space-between",
//             padding: "10px 15px 0px 15px",
//             display: "flex",
//             flexDirection: "row",
//           }}
//         >
//           <TextString
//             text={headerTitle}
//             weight="600"
//             align={"center"}
//             width={"max-content"}
//             size={titleSize ? titleSize : 26}
//             className="headerTitle-title"
//           />

//           <div className="modal-close">
//             <img
//               src={headerClose}
//               alt="close_button"
//               onClick={handleClose}
//               className="modal-close-btn"
//               style={{ verticalAlign: "top", height: "20px" }}
//             />
//           </div>
//         </Modal.Header>
//       )}

//       <Modal.Body
//         className={
//           modalBodyClassName ? modalBodyClassName : "modal-custom-body"
//         }
//       >
//         <div>
//           {icon ? (
//             <div className="success-icon-block">
//               <img src={SuccessIcon} className="success-icon" alt="icon" />
//             </div>
//           ) : null}
//           <TextString
//             text={title}
//             weight="600"
//             size={26}
//             className="modal-header-title"
//           />
//           {children}

//           {buttonLabel && (
//             <ButtonComponent
//               bgcolor="#00b0f0"
//               disabled={buttonDisable}
//               className={`modal-bottom-button ${buttonStyle}`}
//               onClick={onClick}
//             >
//               {buttonLabel}
//             </ButtonComponent>
//           )}
//         </div>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default ModalView;
