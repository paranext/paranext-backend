using System.Diagnostics;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using Paranext.DataProvider.MessageHandlers;
using Paranext.DataProvider.Messages;
using Paranext.DataProvider.MessageTransports;

namespace TestParanextDataProvider
{
    [ExcludeFromCodeCoverage]
    internal class DummyPapiClient : PapiClient
    {
        private readonly Dictionary<string, Func<MessageEvent, Message?>> _eventHandlers = new();

        public Stack<Message?> EventMessages { get; } = new();

        /// <summary>
        /// Fakes a message coming from the server for the PapiClient to handle
        /// </summary>
        /// <param name="message">The message to fake</param>
        /// <returns>The messages that would be returned back to the server</returns>
        public IEnumerable<Message> FakeMessageFromServer(Message message)
        {
            if (!_messageHandlersByMessageType.TryGetValue(message.Type, out var handler))
            {
                Trace.TraceWarning($"No message handler for type {message.Type}");
                return Enumerable.Empty<Message>();
            }

            return handler.HandleMessage(message);
        }

        #region Overrides of PapiClient
        public override Task<bool> ConnectAsync()
        {
            return Task.FromResult(true); // Pretend we succeeded
        }

        public override Task DisconnectAsync()
        {
            // Nothing to do
            return Task.CompletedTask;
        }

        public override Task<bool> RegisterRequestHandler(
            string requestType,
            Func<JsonElement, ResponseToRequest> requestHandler,
            int responseTimeoutInMs = 5000
        )
        {
            var responder = (MessageHandlerRequestByRequestType)
                _messageHandlersByMessageType[MessageType.REQUEST];
            responder.SetHandlerForRequestType(requestType, requestHandler);

            return Task.FromResult(true);
        }

        public override void RegisterEventHandler(
            string eventType,
            Func<MessageEvent, Message?> eventHandler
        )
        {
            _eventHandlers.Add(eventType, eventHandler);
        }

        public override void SendEvent(MessageEvent message)
        {
            if (!_eventHandlers.TryGetValue(message.EventType, out var handler))
                return;

            Message? result = handler(message);
            EventMessages.Push(result);
        }
        #endregion
    }
}
