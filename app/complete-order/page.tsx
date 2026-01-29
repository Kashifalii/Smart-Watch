"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import {
  ArrowLeft,
  CreditCard,
  Lock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function CompleteOrderPage() {
  const router = useRouter();

  const [formData, setFormData] = useState<{
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    zipCode: string;
    country: string;
    cardNumber: string;
    cardName: string;
    expiryDate: string;
    cvv: string;
  }>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const [selectedPayment, setSelectedPayment] = useState<string>("credit-card");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [orderComplete, setOrderComplete] = useState<boolean>(false);
  const [agreedToTerms, setAgreedToTerms] = useState<boolean>(false);

  const paymentMethods: Array<{
    id: string;
    name: string;
    icon: string;
  }> = [
    { id: "credit-card", name: "Credit Card", icon: "card" },
    { id: "visa", name: "Visa", icon: "visa" },
    { id: "mastercard", name: "Mastercard", icon: "mastercard" },
    { id: "amex", name: "American Express", icon: "amex" },
    { id: "discover", name: "Discover", icon: "discover" },
  ];

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = e.target.value.replace(/\s/g, "");
    value = value.replace(/\D/g, "");
    value = value.substring(0, 16);

    const formatted = value.match(/.{1,4}/g)?.join(" ") || value;
    setFormData((prev) => ({ ...prev, cardNumber: formatted }));

    if (errors.cardNumber) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.cardNumber;
        return newErrors;
      });
    }
  };

  const handleExpiryDateChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length >= 2) {
      value = value.substring(0, 2) + "/" + value.substring(2, 4);
    }

    setFormData((prev) => ({ ...prev, expiryDate: value }));

    if (errors.expiryDate) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.expiryDate;
        return newErrors;
      });
    }
  };

  const handleCvvChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.replace(/\D/g, "").substring(0, 4);
    setFormData((prev) => ({ ...prev, cvv: value }));

    if (errors.cvv) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.cvv;
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    // Personal Information Validation
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s\-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.zipCode.trim()) newErrors.zipCode = "ZIP code is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";

    // Payment Information Validation
    const cardNumberDigits = formData.cardNumber.replace(/\s/g, "");
    if (!cardNumberDigits) {
      newErrors.cardNumber = "Card number is required";
    } else if (cardNumberDigits.length < 13 || cardNumberDigits.length > 16) {
      newErrors.cardNumber = "Invalid card number";
    }

    if (!formData.cardName.trim())
      newErrors.cardName = "Cardholder name is required";

    if (!formData.expiryDate) {
      newErrors.expiryDate = "Expiry date is required";
    } else {
      const [month, year] = formData.expiryDate.split("/");
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear() % 100;
      const currentMonth = currentDate.getMonth() + 1;

      if (!month || !year || parseInt(month) < 1 || parseInt(month) > 12) {
        newErrors.expiryDate = "Invalid expiry date";
      } else if (
        parseInt(year) < currentYear ||
        (parseInt(year) === currentYear && parseInt(month) < currentMonth)
      ) {
        newErrors.expiryDate = "Card has expired";
      }
    }

    if (!formData.cvv) {
      newErrors.cvv = "CVV is required";
    } else if (formData.cvv.length < 3) {
      newErrors.cvv = "Invalid CVV";
    }

    if (!agreedToTerms) {
      newErrors.terms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setOrderComplete(true);

    // Redirect to success page or home after 3 seconds
    setTimeout(() => {
      router.push("/");
    }, 3000);
  };

  const handleBack = (): void => {
    router.back();
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-[#2a2a2a] text-white flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-6">
            <CheckCircle2 className="w-24 h-24 text-green-500 mx-auto mb-4 animate-bounce" />
            <h1 className="text-4xl font-bold mb-4">Order Successful!</h1>
            <p className="text-gray-400 mb-2">Thank you for your purchase</p>
            <p className="text-gray-500 text-sm">
              Order confirmation has been sent to {formData.email}
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Product:</span>
                <span className="font-semibold">Smart Watch ChronoX</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Total:</span>
                <span className="font-semibold text-red">
                  $100 / Pkr 28,000
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Payment Method:</span>
                <span className="font-semibold capitalize">
                  {selectedPayment.replace("-", " ")}
                </span>
              </div>
            </div>
          </div>

          <p className="text-gray-500 text-sm">Redirecting to home page...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#2a2a2a] text-white">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <button
            onClick={handleBack}
            className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold">
              Complete Your Order
            </h1>
            <p className="text-gray-400 mt-1">
              Secure checkout powered by encryption
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Forms */}
            <div className="lg:col-span-2 space-y-8">
              {/* Personal Information */}
              <div className="bg-gray-800 rounded-2xl p-6 lg:p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-red rounded-full flex items-center justify-center text-sm">
                    1
                  </span>
                  Personal Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-900 border-2 ${
                        errors.fullName ? "border-red" : "border-gray-700"
                      } rounded-lg focus:outline-none focus:border-red transition-colors`}
                      placeholder="John Doe"
                    />
                    {errors.fullName && (
                      <p className="text-red text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-900 border-2 ${
                        errors.email ? "border-red" : "border-gray-700"
                      } rounded-lg focus:outline-none focus:border-red transition-colors`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-900 border-2 ${
                        errors.phone ? "border-red" : "border-gray-700"
                      } rounded-lg focus:outline-none focus:border-red transition-colors`}
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="text-red text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2">
                      Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-900 border-2 ${
                        errors.address ? "border-red" : "border-gray-700"
                      } rounded-lg focus:outline-none focus:border-red transition-colors`}
                      placeholder="123 Main Street, Apartment 4B"
                    />
                    {errors.address && (
                      <p className="text-red text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.address}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-900 border-2 ${
                        errors.city ? "border-red" : "border-gray-700"
                      } rounded-lg focus:outline-none focus:border-red transition-colors`}
                      placeholder="New York"
                    />
                    {errors.city && (
                      <p className="text-red text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.city}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-900 border-2 ${
                        errors.zipCode ? "border-red" : "border-gray-700"
                      } rounded-lg focus:outline-none focus:border-red transition-colors`}
                      placeholder="10001"
                    />
                    {errors.zipCode && (
                      <p className="text-red text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.zipCode}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2">
                      Country *
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-900 border-2 ${
                        errors.country ? "border-red" : "border-gray-700"
                      } rounded-lg focus:outline-none focus:border-red transition-colors`}
                    >
                      <option value="">Select Country</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="CA">Canada</option>
                      <option value="PK">Pakistan</option>
                      <option value="IN">India</option>
                      <option value="AU">Australia</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.country && (
                      <p className="text-red text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.country}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="bg-gray-800 rounded-2xl p-6 lg:p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-red rounded-full flex items-center justify-center text-sm">
                    2
                  </span>
                  Payment Method
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setSelectedPayment(method.id)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        selectedPayment === method.id
                          ? "border-red bg-red/10"
                          : "border-gray-700 hover:border-gray-600"
                      }`}
                    >
                      <CreditCard className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-xs font-semibold text-center">
                        {method.name}
                      </p>
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2">
                      Card Number *
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleCardNumberChange}
                      className={`w-full px-4 py-3 bg-gray-900 border-2 ${
                        errors.cardNumber ? "border-red" : "border-gray-700"
                      } rounded-lg focus:outline-none focus:border-red transition-colors`}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                    />
                    {errors.cardNumber && (
                      <p className="text-red text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.cardNumber}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2">
                      Cardholder Name *
                    </label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-900 border-2 ${
                        errors.cardName ? "border-red" : "border-gray-700"
                      } rounded-lg focus:outline-none focus:border-red transition-colors`}
                      placeholder="JOHN DOE"
                    />
                    {errors.cardName && (
                      <p className="text-red text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.cardName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Expiry Date *
                    </label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleExpiryDateChange}
                      className={`w-full px-4 py-3 bg-gray-900 border-2 ${
                        errors.expiryDate ? "border-red" : "border-gray-700"
                      } rounded-lg focus:outline-none focus:border-red transition-colors`}
                      placeholder="MM/YY"
                      maxLength={5}
                    />
                    {errors.expiryDate && (
                      <p className="text-red text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.expiryDate}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      CVV *
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleCvvChange}
                      className={`w-full px-4 py-3 bg-gray-900 border-2 ${
                        errors.cvv ? "border-red" : "border-gray-700"
                      } rounded-lg focus:outline-none focus:border-red transition-colors`}
                      placeholder="123"
                      maxLength={4}
                    />
                    {errors.cvv && (
                      <p className="text-red text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.cvv}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreedToTerms}
                  onChange={(e) => {
                    setAgreedToTerms(e.target.checked);
                    if (errors.terms) {
                      setErrors((prev) => {
                        const newErrors = { ...prev };
                        delete newErrors.terms;
                        return newErrors;
                      });
                    }
                  }}
                  className="w-5 h-5 mt-0.5 accent-red"
                />
                <label htmlFor="terms" className="text-sm text-gray-300">
                  I agree to the{" "}
                  <a href="#" className="text-red hover:text-red-400">
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-red hover:text-red-400">
                    Privacy Policy
                  </a>
                </label>
              </div>
              {errors.terms && (
                <p className="text-red text-sm flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" /> {errors.terms}
                </p>
              )}
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800 rounded-2xl p-6 lg:p-8 sticky top-8">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                <div className="mb-6">
                  <div className="bg-linear-to-br from-red-400 to-red rounded-xl p-4 mb-4">
                    <div className="flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-black border-4 border-gray-800 flex items-center justify-center relative">
                        <div className="absolute inset-0 rounded-full border-2 border-red"></div>
                        <div className="text-white text-xs">ChronoX</div>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">
                    Smart Watch ChronoX
                  </h3>
                  <p className="text-gray-400 text-sm mb-1">
                    Product Code: #233455
                  </p>
                  <p className="text-gray-400 text-sm">Color: Black Silver</p>
                </div>

                <div className="space-y-3 mb-6 pb-6 border-b border-gray-700">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="font-semibold">$100.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Shipping</span>
                    <span className="font-semibold text-green-500">FREE</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Tax</span>
                    <span className="font-semibold">$0.00</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-700">
                  <span className="text-lg font-bold">Total</span>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-red">$100.00</p>
                    <p className="text-sm text-gray-400">Pkr 28,000</p>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-red hover:bg-red disabled:bg-gray-600 text-white font-bold py-4 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Lock className="w-5 h-5" />
                      Complete Purchase
                    </>
                  )}
                </button>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                  <Lock className="w-3 h-3" />
                  <span>Secured by 256-bit SSL encryption</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
