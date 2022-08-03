import { Alert } from "@components/ui/Alert"


const CartPage = () => {
    return (
        <div className="container min-h-[600px]">
            <div className="mt-10 mb-5 border-b pb-5">
                <Alert title="Your cart is empty" subtitle="You will need to add some items to the cart before you can checkout." />
            </div>
            <div className="flex justify-between items-center border p-4 rounded-md">
                <p><span className="font-semibold">Sub total:</span> $0</p>
                <button className="bg-slate-900 text-slate-100 px-6 py-2 rounded-md">
                    Checkout
                </button>
            </div>
        </div>
    )
}

export default CartPage