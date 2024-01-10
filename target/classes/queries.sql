    SELECT_SMS_MESSAGES_COUNT = SELECT COUNT(*) FROM sms_messages

    SELECT_COUNT_sender_receiver =  SELECT COUNT(*) FROM sms_messages WHERE sender = ? AND receiver = ?
    SELECT_WITH_SEQ_NO = SELECT seq_no, msg, receiver, effective_dt, EMAIL_ADDR, email_status, subject FROM sms_messages WHERE status IN ('Queued', 'failed') AND effective_dt <= GETDATE()
    SELECT_MSG_WITH_PRIORITY_lessThan9 = SELECT seq_no, msg, receiver, effective_dt, EMAIL_ADDR, email_status, subject FROM sms_messages WHERE status IN ('queued', 'failed') AND msg_priority != 9
    UPDATE_SMS_MESSAGES_WITH_SEQ_NO = UPDATE sms_messages SET status = ?, msg_comment = ?, sendtime = GETDATE() WHERE seq_no = ?

    UPDATE_SMS_MESSAGES_WITH_senderReceiver = UPDATE sms_messages SET status = ?, msg_comment = ?, sendtime = GETDATE() WHERE sender = ? AND receiver = ?
    UPDATE_SMS_MESSAGES_WITH_EMAIL_RECIPIENTS = UPDATE sms_messages SET status = ?, msg_comment = ?, sendtime = GETDATE(), email_recipients = ? WHERE seq_no = ?

    INSERT_QUERY = INSERT INTO sms_messages(sender, receiver, msg, sendtime, status) VALUES (?, ?, ?, GETDATE(), 'success')
    INSERT_QUERY_and_msgComment = INSERT INTO sms_messages(sender, receiver, msg, sendtime, status, msg_comment) VALUES(?, ?, ?, ?, 'success', ?)

    INSERT_QUERY_email_recipients =INSERT INTO sms_messages(seq_no, sender, receiver, msg, sendtime, status, email_recipients) VALUES(?, ?, ?, ?, ?, 'success', ?)

    INSERT_QUERY_FOR_BULK = INSERT INTO sms_bulk_message_info(sender, receiver, sms_code, msg, effective_dt) VALUES (?, ?, ?, ?, GETDATE())

    SELECT_EMAIL_COUNT = SELECT COUNT(*) FROM sms_messages WHERE email_addr IS NOT NULL

    SELECT_SEQ_NO_COUNT = SELECT COUNT(*) FROM sms_messages WHERE seq_no = ?
