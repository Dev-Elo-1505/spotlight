import { ClerkLoaded, ClerkProvider, useAuth } from "@clerk/expo"
import { tokenCache } from "@clerk/expo/token-cache"
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!
const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
})

if (!publishableKey) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

const ClerkandConvexProvider = ({children}: {children : React.ReactNode}) => {
    return (
        <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
            <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                <ClerkLoaded>
                    {children}
                </ClerkLoaded>
            </ConvexProviderWithClerk>
      
      </ClerkProvider>
    )
}

export default ClerkandConvexProvider