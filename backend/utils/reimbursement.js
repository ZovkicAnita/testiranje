const {
    validateDescription,
    validateAmount,
    validateType,
    validateStatusChange,
    isAdmin
  } = require('./validators');
  
  function createReimbursement(data, userId) {
    const { amount, description, type } = data;
  
    if (!validateAmount(amount)) {
      return {
        error: {
          errorCode: 'REQ002',
          errorType: 'ValidationError',
          message: 'Amount must be a positive number'
        }
      };
    }
  
    if (!validateDescription(description)) {
      return {
        error: {
          errorCode: 'REQ003',
          errorType: 'ValidationError',
          message: 'Description must be between 5 and 200 characters'
        }
      };
    }
  
    if (!validateType(type)) {
      return {
        error: {
          errorCode: 'REQ004',
          errorType: 'ValidationError',
          message: 'Invalid reimbursement type'
        }
      };
    }
  
    const newItem = {
      id: Date.now(),
      userId,
      amount,
      description,
      type,
      status: 'Pending'
    };
  
    return { reimbursement: newItem };
  }
  
  function updateReimbursementStatus(reimbursement, newStatus, userRole) {
    if (!validateStatusChange(newStatus)) {
      return {
        error: {
          errorCode: 'REQ005',
          errorType: 'ValidationError',
          message: 'Invalid status update'
        }
      };
    }
  
    if (!isAdmin(userRole)) {
      return {
        error: {
          errorCode: 'AUTH004',
          errorType: 'Forbidden',
          message: 'Only admins can approve or reject reimbursements'
        }
      };
    }
  
    reimbursement.status = newStatus;
    return { reimbursement };
  }
  
  module.exports = {
    createReimbursement,
    updateReimbursementStatus
  };
  