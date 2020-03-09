(function() {var implementors = {};
implementors["ink_core"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"ink_core/env/call/struct.ReturnType.html\" title=\"struct ink_core::env::call::ReturnType\">ReturnType</a>&lt;T&gt;","synthetic":false,"types":["ink_core::env::call::builder::ReturnType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"ink_core/env/call/struct.Selector.html\" title=\"struct ink_core::env::call::Selector\">Selector</a>","synthetic":false,"types":["ink_core::env::call::utils::Selector"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"ink_core/env/struct.AccountId.html\" title=\"struct ink_core::env::AccountId\">AccountId</a>","synthetic":false,"types":["ink_core::env::types::AccountId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"ink_core/env/struct.Hash.html\" title=\"struct ink_core::env::Hash\">Hash</a>","synthetic":false,"types":["ink_core::env::types::Hash"]}];
implementors["ink_lang"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"ink_lang/enum.DispatchMode.html\" title=\"enum ink_lang::DispatchMode\">DispatchMode</a>","synthetic":false,"types":["ink_lang::contract::DispatchMode"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"ink_lang/struct.UnreachableDispatcher.html\" title=\"struct ink_lang::UnreachableDispatcher\">UnreachableDispatcher</a>","synthetic":false,"types":["ink_lang::dispatcher::UnreachableDispatcher"]},{"text":"impl&lt;Msg, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"ink_lang/struct.Dispatcher.html\" title=\"struct ink_lang::Dispatcher\">Dispatcher</a>&lt;Msg, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Msg: <a class=\"trait\" href=\"ink_lang/trait.FnInput.html\" title=\"trait ink_lang::FnInput\">FnInput</a> + <a class=\"trait\" href=\"ink_lang/trait.FnOutput.html\" title=\"trait ink_lang::FnOutput\">FnOutput</a>,&nbsp;</span>","synthetic":false,"types":["ink_lang::dispatcher::Dispatcher"]},{"text":"impl&lt;Msg, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"ink_lang/struct.DispatcherMut.html\" title=\"struct ink_lang::DispatcherMut\">DispatcherMut</a>&lt;Msg, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Msg: <a class=\"trait\" href=\"ink_lang/trait.FnInput.html\" title=\"trait ink_lang::FnInput\">FnInput</a> + <a class=\"trait\" href=\"ink_lang/trait.FnOutput.html\" title=\"trait ink_lang::FnOutput\">FnOutput</a>,&nbsp;</span>","synthetic":false,"types":["ink_lang::dispatcher::DispatcherMut"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"ink_lang/enum.DispatchError.html\" title=\"enum ink_lang::DispatchError\">DispatchError</a>","synthetic":false,"types":["ink_lang::error::DispatchError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"ink_lang/struct.DispatchRetCode.html\" title=\"struct ink_lang::DispatchRetCode\">DispatchRetCode</a>","synthetic":false,"types":["ink_lang::error::DispatchRetCode"]}];
implementors["ink_primitives"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"ink_primitives/struct.Key.html\" title=\"struct ink_primitives::Key\">Key</a>","synthetic":false,"types":["ink_primitives::key::Key"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"ink_primitives/struct.KeyDiff.html\" title=\"struct ink_primitives::KeyDiff\">KeyDiff</a>","synthetic":false,"types":["ink_primitives::key::KeyDiff"]}];
implementors["type_metadata"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"type_metadata/form/enum.MetaForm.html\" title=\"enum type_metadata::form::MetaForm\">MetaForm</a>","synthetic":false,"types":["type_metadata::form::MetaForm"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"type_metadata/form/enum.CompactForm.html\" title=\"enum type_metadata::form::CompactForm\">CompactForm</a>","synthetic":false,"types":["type_metadata::form::CompactForm"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"type_metadata/interner/struct.UntrackedSymbol.html\" title=\"struct type_metadata::interner::UntrackedSymbol\">UntrackedSymbol</a>&lt;T&gt;","synthetic":false,"types":["type_metadata::interner::UntrackedSymbol"]},{"text":"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"type_metadata/interner/struct.Symbol.html\" title=\"struct type_metadata::interner::Symbol\">Symbol</a>&lt;'a, T&gt;","synthetic":false,"types":["type_metadata::interner::Symbol"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"type_metadata/struct.MetaType.html\" title=\"struct type_metadata::MetaType\">MetaType</a>","synthetic":false,"types":["type_metadata::meta_type::MetaType"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()