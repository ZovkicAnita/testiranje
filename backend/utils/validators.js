/**
 * Validation functions
 */

// Validates that a description is a string with 5 to 200 characters
function validateDescription(description) {
    return typeof description === 'string' && description.length >= 5 && description.length <= 200;
  }
  
  // Validates that a reimbursement amount is a positive number
  function validateAmount(amount) {
    return typeof amount === 'number' && amount > 0;
  }
  
  // Validates reimbursement type is one of the allowed enums
  const ALLOWED_TYPES = [
    'business_expenses',
    'auto_mileage',
    'travel',
    'medical_expenses',
    'employee_stipends'
  ];
  
  function validateType(type) {
    return ALLOWED_TYPES.includes(type);
  }
  
  // Validates status transitions: Only allow "Approved" or "Rejected"
  function validateStatusChange(status) {
    return ['Approved', 'Rejected'].includes(status);
  }
  
  // Role check for admin permissions
  function isAdmin(role) {
    return role === 'admin';
  }
  
  module.exports = {
    validateDescription,
    validateAmount,
    validateType,
    validateStatusChange,
    isAdmin,
    ALLOWED_TYPES
  };
  