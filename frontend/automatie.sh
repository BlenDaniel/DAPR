#!/bin/bash

# Define the project root directory
PROJECT_ROOT="Foodism"

# Create directories
mkdir -p "$PROJECT_ROOT/App"
mkdir -p "$PROJECT_ROOT/Presentation/Views"
mkdir -p "$PROJECT_ROOT/Presentation/ViewModels"
mkdir -p "$PROJECT_ROOT/Domain/Models"
mkdir -p "$PROJECT_ROOT/Domain/UseCases"
mkdir -p "$PROJECT_ROOT/Data/Repositories"
mkdir -p "$PROJECT_ROOT/Data/Sources"
mkdir -p "$PROJECT_ROOT/Utils"

# Create App.swift
cat <<EOL > "$PROJECT_ROOT/App/App.swift"
import SwiftUI

@main
struct MyApp: App {
    var body: some Scene {
        WindowGroup {
            LoginView()
        }
    }
}
EOL

# Create LoginView.swift
cat <<EOL > "$PROJECT_ROOT/Presentation/Views/LoginView.swift"
import SwiftUI

struct LoginView: View {
    @StateObject private var viewModel = LoginViewModel(authUseCase: DependencyInjector.shared.authUseCase)

    var body: some View {
        VStack {
            if viewModel.isLoggedIn {
                Text("You are logged in!")
            } else {
                TextField("Email", text: \$viewModel.email)
                    .textFieldStyle(RoundedBorderTextFieldStyle())
                    .padding()
                
                SecureField("Password", text: \$viewModel.password)
                    .textFieldStyle(RoundedBorderTextFieldStyle())
                    .padding()
                
                TextField("Phone", text: \$viewModel.phone)
                    .textFieldStyle(RoundedBorderTextFieldStyle())
                    .padding()
                
                Button("Sign In with Email") {
                    Task { await viewModel.signInWithEmail() }
                }
                .padding()
                
                Button("Sign In with Google") {
                    Task { await viewModel.signInWithGoogle() }
                }
                .padding()
                
                Button("Sign In with Phone") {
                    Task { await viewModel.signInWithPhone() }
                }
                .padding()
                
                if !viewModel.errorMessage.isEmpty {
                    Text(viewModel.errorMessage)
                        .foregroundColor(.red)
                }
            }
        }
        .padding()
    }
}
EOL

# Create HomeView.swift
cat <<EOL > "$PROJECT_ROOT/Presentation/Views/HomeView.swift"
import SwiftUI

struct HomeView: View {
    var body: some View {
        Text("Welcome to the Home Screen!")
    }
}
EOL

# Create LoginViewModel.swift
cat <<EOL > "$PROJECT_ROOT/Presentation/ViewModels/LoginViewModel.swift"
import Foundation

class LoginViewModel: ObservableObject {
    @Published var email: String = ""
    @Published var password: String = ""
    @Published var phone: String = ""
    @Published var isLoggedIn: Bool = false
    @Published var errorMessage: String = ""

    private let authUseCase: AuthUseCaseProtocol

    init(authUseCase: AuthUseCaseProtocol) {
        self.authUseCase = authUseCase
    }

    func signInWithEmail() async {
        do {
            let user = try await authUseCase.signInWithEmail(email: email, password: password)
            DispatchQueue.main.async {
                self.isLoggedIn = true
            }
        } catch {
            DispatchQueue.main.async {
                self.errorMessage = error.localizedDescription
            }
        }
    }

    func signInWithGoogle() async {
        // Implement Google Sign-In and get the token
        let idToken = "GOOGLE_ID_TOKEN" // Replace with actual token
        do {
            let user = try await authUseCase.signInWithGoogle(idToken: idToken)
            DispatchQueue.main.async {
                self.isLoggedIn = true
            }
        } catch {
            DispatchQueue.main.async {
                self.errorMessage = error.localizedDescription
            }
        }
    }

    func signInWithPhone() async {
        do {
            let user = try await authUseCase.signInWithPhone(phone: phone)
            DispatchQueue.main.async {
                self.isLoggedIn = true
            }
        } catch {
            DispatchQueue.main.async {
                self.errorMessage = error.localizedDescription
            }
        }
    }
}
EOL

# Create HomeViewModel.swift
cat <<EOL > "$PROJECT_ROOT/Presentation/ViewModels/HomeViewModel.swift"
import Foundation

class HomeViewModel: ObservableObject {
    // Add HomeView-specific logic here
}
EOL

# Create User.swift
cat <<EOL > "$PROJECT_ROOT/Domain/Models/User.swift"
import Foundation

struct User: Codable {
    let id: UUID
    let email: String?
    let phone: String?
    let name: String?
}
EOL

# Create AuthUseCase.swift
cat <<EOL > "$PROJECT_ROOT/Domain/UseCases/AuthUseCase.swift"
import Foundation

protocol AuthUseCaseProtocol {
    func signInWithEmail(email: String, password: String) async throws -> User
    func signInWithGoogle(idToken: String) async throws -> User
    func signInWithPhone(phone: String) async throws -> User
}

class AuthUseCase: AuthUseCaseProtocol {
    private let authRepository: AuthRepositoryProtocol

    init(authRepository: AuthRepositoryProtocol) {
        self.authRepository = authRepository
    }

    func signInWithEmail(email: String, password: String) async throws -> User {
        try await authRepository.signInWithEmail(email: email, password: password)
    }

    func signInWithGoogle(idToken: String) async throws -> User {
        try await authRepository.signInWithGoogle(idToken: idToken)
    }

    func signInWithPhone(phone: String) async throws -> User {
        try await authRepository.signInWithPhone(phone: phone)
    }
}
EOL

# Create UserUseCase.swift
cat <<EOL > "$PROJECT_ROOT/Domain/UseCases/UserUseCase.swift"
import Foundation

protocol UserUseCaseProtocol {
    // Define user-related use cases here
}

class UserUseCase: UserUseCaseProtocol {
    // Implement user-related use cases here
}
EOL

# Create AuthRepository.swift
cat <<EOL > "$PROJECT_ROOT/Data/Repositories/AuthRepository.swift"
import Foundation

protocol AuthRepositoryProtocol {
    func signInWithEmail(email: String, password: String) async throws -> User
    func signInWithGoogle(idToken: String) async throws -> User
    func signInWithPhone(phone: String) async throws -> User
}

class AuthRepository: AuthRepositoryProtocol {
    private let supabaseDataSource: SupabaseDataSourceProtocol

    init(supabaseDataSource: SupabaseDataSourceProtocol) {
        self.supabaseDataSource = supabaseDataSource
    }

    func signInWithEmail(email: String, password: String) async throws -> User {
        try await supabaseDataSource.signInWithEmail(email: email, password: password)
    }

    func signInWithGoogle(idToken: String) async throws -> User {
        try await supabaseDataSource.signInWithGoogle(idToken: idToken)
    }

    func signInWithPhone(phone: String) async throws -> User {
        try await supabaseDataSource.signInWithPhone(phone: phone)
    }
}
EOL

# Create UserRepository.swift
cat <<EOL > "$PROJECT_ROOT/Data/Repositories/UserRepository.swift"
import Foundation

protocol UserRepositoryProtocol {
    // Define user-related repository methods here
}

class UserRepository: UserRepositoryProtocol {
    // Implement user-related repository methods here
}
EOL

# Create SupabaseDataSource.swift
cat <<EOL > "$PROJECT_ROOT/Data/Sources/SupabaseDataSource.swift"
import Supabase

protocol SupabaseDataSourceProtocol {
    func signInWithEmail(email: String, password: String) async throws -> User
    func signInWithGoogle(idToken: String) async throws -> User
    func signInWithPhone(phone: String) async throws -> User
}

class SupabaseDataSource: SupabaseDataSourceProtocol {
    private let supabase = SupabaseClient(supabaseUrl: Constants.supabaseUrl, supabaseKey: Constants.supabaseKey)

    func signInWithEmail(email: String, password: String) async throws -> User {
        let session = try await supabase.auth.signIn(email: email, password: password)
        return User(id: session.user.id, email: session.user.email, phone: session.user.phone, name: session.user.userMetadata?["name"] as? String)
    }

    func signInWithGoogle(idToken: String) async throws -> User {
        let session = try await supabase.auth.signInWithIdToken(provider: .google, idToken: idToken)
        return User(id: session.user.id, email: session.user.email, phone: session.user.phone, name: session.user.userMetadata?["name"] as? String)
    }

    func signInWithPhone(phone: String) async throws -> User {
        let session = try await supabase.auth.signIn(phone: phone)
        return User(id: session.user.id, email: session.user.email, phone: session.user.phone, name: session.user.userMetadata?["name"] as? String)
    }
}
EOL

# Create DependencyInjector.swift
cat <<EOL > "$PROJECT_ROOT/Utils/DependencyInjector.swift"
class DependencyInjector {
    static let shared = DependencyInjector()

    private init() {}

    lazy var supabaseDataSource: SupabaseDataSourceProtocol = SupabaseDataSource()
    lazy var authRepository: AuthRepositoryProtocol = AuthRepository(supabaseDataSource: supabaseDataSource)
    lazy var authUseCase: AuthUseCaseProtocol = AuthUseCase(authRepository: authRepository)
}
EOL

# Create Constants.swift
cat <<EOL > "$PROJECT_ROOT/Utils/Constants.swift"
import Foundation

struct Constants {
    static let supabaseUrl = "YOUR_SUPABASE_URL"
    static let supabaseKey = "YOUR_SUPABASE_ANON_KEY"
}
EOL

echo "Project structure and files created successfully!"